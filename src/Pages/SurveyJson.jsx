export const surveyJson = {
  pages: [
    {
      name: "widget",
      navigationTitle: "Widgets",
      navigationDescription: "custom",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "panel",
          name: "widgets",
          title: "Widgets",
          elements: [
            {
              type: "textwidget",
              name: "textwidget",
              title: "Text",
              titleLocation: "hidden",
              icon: true,
              help: {
                title: "The content of the ",
                text: "Text textField help here..."
              },
              isRequired: true
            },
            {
              type: "selectwidget",
              name: "selectwidget",
              title: "Select",
              titleLocation: "hidden",
              help: {
                title: "The content of the ",
                text: "Text textField help here..."
              },
              choices: ["Designer", "Developer", "Manager", "Administration"],
              isRequired: true
            },
            {
              type: "multiselectwidget",
              name: "multiselectwidget",
              title: "Multi-Select",
              titleLocation: "hidden",
              help: {
                title: "The content of the ",
                text: "Text textField help here..."
              },
              choices: [
                "Active",
                "Ambitious",
                "Cautious",
                "Conscientious",
                "Creative",
                "Logical",
                "Organized",
                "Perfectionist",
                "Precise"
              ],
              isRequired: true
            }
          ]
        }
      ]
    },
    {
      name: "questions",
      navigationTitle: "Questions Types",
      navigationDescription: "overload",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "panel",
          name: "questions",
          title: "Questions Types",
          elements: [
            {
              type: "text",
              name: "textquestions",
              title: "Text",
              inputType: "text",
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "dropdown",
              name: "selectquestions",
              title: "Select",
              hasNone: true,
              choices: ["-", "Audi", "Peugeot", "Renault", "Volkswagen"],
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "text",
              name: "numberquestion",
              title: "Number",
              inputType: "number",
              titleLocation: "hidden",
              isRequired: false,
              hideNumber: true
            },
            {
              type: "boolean",
              title: "Boolean",
              name: "booleanquestion",
              labelTrue: "Mr.",
              labelFalse: "Mrs.",
              indent: 3,
              isRequired: false,
              hideNumber: true
            }
          ]
        }
      ]
    },
    {
      name: "all",
      navigationTitle: "All",
      navigationDescription: "mixeds",
      elements: [
        {
          type: "panel",
          name: "mixed",
          title: "Widgets & Questions Types",
          elements: [
            {
              type: "text",
              name: "name",
              title: "Name",
              titleLocation: "hidden",
              inputType: "text",
              hideNumber: true,
              isRequired: true
            },
            {
              type: "textwidget",
              name: "firstname",
              title: "FirstName",
              titleLocation: "hidden",
              inputType: "text",
              help: {
                title: "Please, entrer your ",
                text: "Text textField help here..."
              },
              icon: true,
              hideNumber: true,
              isRequired: true
            },
            {
              type: "text",
              name: "phone",
              title: "Phone",
              titleLocation: "hidden",
              inputType: "tel"
            },
            {
              type: "text",
              name: "email",
              title: "Email",
              titleLocation: "hidden",
              inputType: "email"
            },
            {
              type: "text",
              name: "birthday",
              title: "Birthday",
              description: "What's your birthday ?",
              titleLocation: "hidden",
              inputType: "date"
            }
          ]
        },
        {
          type: "panel",
          name: "survey",
          title: "Native form Survey",
          elements: [
            {
              type: "rating",
              name: "nps_score",
              title:
                "On a scale of zero to ten, how likely are you to recommend our compagny to a friend or colleague ?",
              rateMin: 0,
              rateMax: 10
            },
            {
              type: "checkbox",
              name: "promoter_features2",
              title: "Which features do you value the most?",
              visible: false,
              visibleIf: "{nps_score} >= 9",
              validators: [
                {
                  type: "answercount",
                  text: "Please select two features maximum.",
                  maxCount: 2
                }
              ],
              choices: [
                "Performance",
                "Stability",
                "User Interface",
                "Complete Functionality"
              ],
              hasOther: true,
              otherText: "Other feature:",
              colCount: 2
            },
            {
              type: "comment",
              name: "passive_experience",
              title: "What do you like about our product?",
              visible: false,
              visibleIf: "{nps_score} > 6  and {nps_score} < 9"
            },
            {
              type: "comment",
              name: "disappointed_experience",
              title:
                "What do you miss or find disappointing in your experience with our products?",
              visible: false,
              visibleIf: "{nps_score} notempty"
            }
          ]
        }
      ]
    }
  ],
  showProgressBar: "top",
  progressBarType: "buttons"
};