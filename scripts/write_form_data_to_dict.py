import os
import pandas as pd


# Function to extract a year from a text string
def extract_year(text):
    if pd.isna(text) or text.strip() == "":
        return None
    try:
        return int(text[-4:])
    except (ValueError, IndexError):
        return None


# Function to convert Google Drive link to direct image URL
def convert_drive_link_to_direct_image_url(link):
    if pd.isna(link) or link.strip() == "":
        return None
    prefix = "https://drive.google.com/uc?export=view&id="
    file_id = link.split("id=")[-1]
    return f"{prefix}{file_id}"


def clean_name(first_name, last_name):
    # Define titles to remove
    titles = ["Dr.", "Mr.", "Ms.", "Mrs."]
    first_name = first_name.strip()
    last_name = last_name.strip()

    # Remove titles and extra spaces
    for title in titles:
        if first_name.startswith(title):
            first_name = first_name[len(title) :].strip()


def update_image_field(people, headshots_directory):
    # Update 'image' field by searching in the specified directory
    updated_people = []
    for person in people:
        print(person["name"])
        # Search for matching files
        matched_files = [
            f for f in os.listdir(headshots_directory) if person["name"] in f
        ]
        if matched_files:
            # Update the image field with the first match found
            print(f"Match files: {matched_files}")
            person["image"] = os.path.join(headshots_directory, matched_files[0])
        else:
            person["image"] = None
        updated_people.append(person)

    # Return the updated list of dictionaries
    return updated_people


# Load the CSV file into a DataFrame
df = pd.read_csv("./contributor_info_responses_5_6_24.csv")

# Transform each row in the DataFrame to a `Person` dictionary, omitting None values
people = df.apply(
    lambda row: {
        **(
            {"name": f"{row['First Name']} {row['Last Name']}".strip()}
            if not pd.isna(row["First Name"]) and not pd.isna(row["Last Name"])
            else {}
        ),
        **(
            {"bio": row["Bio"].strip()}
            if not pd.isna(row["Bio"]) and row["Bio"].strip() != ""
            else {}
        ),
        **(
            {
                "title": row[
                    "Title at Cornell (eg. Research Associate, MEng Student, PhD Student)"
                ].strip()
            }
            if not pd.isna(
                row[
                    "Title at Cornell (eg. Research Associate, MEng Student, PhD Student)"
                ]
            )
            and row[
                "Title at Cornell (eg. Research Associate, MEng Student, PhD Student)"
            ].strip()
            != ""
            else {}
        ),
        **(
            {
                "image": convert_drive_link_to_direct_image_url(
                    row["Headshot photo of you (square-cropped, if possible)"]
                )
            }
            if not pd.isna(row["Headshot photo of you (square-cropped, if possible)"])
            and row["Headshot photo of you (square-cropped, if possible)"].strip() != ""
            else {}
        ),
        **(
            {
                "role": row[
                    "Role at Gao Labs/Cornell (eg. Lead Developer for CAT) (optional)"
                ].strip()
            }
            if not pd.isna(
                row["Role at Gao Labs/Cornell (eg. Lead Developer for CAT) (optional)"]
            )
            and row[
                "Role at Gao Labs/Cornell (eg. Lead Developer for CAT) (optional)"
            ].strip()
            != ""
            else {}
        ),
        **({"team": row["Team"].strip()} if row["Team"] in ["uTech", "CAT"] else {}),
        **(
            {
                "yearIfPastMember": extract_year(
                    row[
                        "What semester did you start contributing at Gao Labs? Please format your answer [SEASON YEAR]"
                    ]
                )
            }
            if extract_year(
                row[
                    "What semester did you start contributing at Gao Labs? Please format your answer [SEASON YEAR]"
                ]
            )
            is not None
            else {}
        ),
        **(
            {"linkedinUrl": row["LinkedIn Profile URL (optional)"].strip()}
            if not pd.isna(row["LinkedIn Profile URL (optional)"])
            and row["LinkedIn Profile URL (optional)"].strip() != ""
            else {}
        ),
        **(
            {"websiteUrl": row["Personal Website URL (optional)"].strip()}
            if not pd.isna(row["Personal Website URL (optional)"])
            and row["Personal Website URL (optional)"].strip() != ""
            else {}
        ),
        **(
            {
                "email": row[
                    "Email for people to contact you on website (optional)"
                ].strip()
            }
            if not pd.isna(row["Email for people to contact you on website (optional)"])
            and row["Email for people to contact you on website (optional)"].strip()
            != ""
            else {}
        ),
        **(
            {"githubUrl": row["GitHub Profile URL (optional)"].strip()}
            if not pd.isna(row["GitHub Profile URL (optional)"])
            and row["GitHub Profile URL (optional)"].strip() != ""
            else {}
        ),
    },
    axis=1,
).tolist()

people = update_image_field(people, "../website/src/assets/headshots")

# Print new content of bios.const.ts to terminal (ONLY ADD NEW ROWS TO END OF FILE -- DO NOT REPLACE CONTENTS OF FILE)
for p in people:
    print(f"{p},")
print("]")
