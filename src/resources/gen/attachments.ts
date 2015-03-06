/* tslint:disable */

// TODO: Add type information from asana_json.d.ts
var json = {
  "templates": [
    {
      "template": {
        "value": 200,
        "comment": "Success.\n"
      }
    },
    {
      "template": {
        "type": "String",
        "example_values": [
          "'2012-02-22T02:06:58.158Z'",
          "now"
        ]
      }
    },
    {
      "template": [
        {
          "type": "Boolean",
          "example_values": [
            "false"
          ]
        }
      ]
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "12345"
        ]
      }
    },
    {
      "template": {
        "type": "Array",
        "example_values": [
          "[133713, 184253]"
        ]
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "13579"
        ],
        "comment": "Globally unique identifier for the project.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "11235"
        ],
        "comment": "Globally unique identifier for the tag.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "124816"
        ],
        "comment": "Globally unique identifier for the task.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "14641"
        ],
        "comment": "Globally unique identifier for the user.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "1331"
        ],
        "comment": "Globally unique identifier for the workspace or organization.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "12357"
        ],
        "comment": "Globally unique identifier for the attachment.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "14916"
        ],
        "comment": "Globally unique identifier for the team.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "182764"
        ],
        "comment": "Globally unique identifier for the team.\n"
      }
    },
    {
      "template": [
        {
          "type": "Id",
          "example_values": [
            "1234"
          ],
          "read_only": true,
          "comment": "Globally unique identifier for this object.\n"
        }
      ]
    },
    {
      "template": [
        {
          "type": "String",
          "example_values": [
            "'gsanchez@example.com'"
          ]
        }
      ]
    },
    {
      "template": [
        {
          "type": "Boolean",
          "example_values": [
            "false"
          ]
        }
      ]
    },
    {
      "template": [
        {
          "type": "User",
          "example_values": [
            "{ id: 1234, name: 'Tim Bizarro' }",
            "null"
          ]
        }
      ]
    },
    {
      "template": {
        "type": "Enum",
        "example_values": [
          "'upcoming'"
        ],
        "values": [
          {
            "name": "inbox",
            "comment": "In the inbox."
          },
          {
            "name": "later",
            "comment": "Scheduled for _later_."
          },
          {
            "name": "upcoming",
            "comment": "Scheduled for _upcoming_."
          },
          {
            "name": "today",
            "comment": "Scheduled for _today_."
          }
        ]
      }
    },
    {
      "template": {
        "method": "POST",
        "path": "/tasks/%d/stories",
        "params": [
          {
            "name": "task",
            "type": "Id",
            "example_values": [
              "124816"
            ],
            "comment": "Globally unique identifier for the task.\n",
            "required": true
          },
          {
            "name": "text",
            "type": "String",
            "required": true,
            "comment": "The plain text of the comment to add."
          }
        ],
        "comment": "Adds a comment to a task. The comment will be authored by the\ncurrently authenticated user, and timestamped when the server receives\nthe request.\n\nReturns the full record for the new story added to the task.\n"
      }
    }
  ],
  "name": "attachment",
  "comment": "An _attachment_ object represents any file attached to a task in Asana,\nwhether it's an uploaded file or one associated via a third-party service\nsuch as Dropbox or Google Drive.\n",
  "properties": [
    {
      "name": "id",
      "type": "Id",
      "example_values": [
        "1234"
      ],
      "read_only": true,
      "comment": "Globally unique identifier for this object.\n"
    }
  ],
  "actions": [
    {
      "name": "findById",
      "method": "GET",
      "path": "/attachments/%d",
      "params": [
        {
          "name": "attachment",
          "type": "Id",
          "example_values": [
            "12357"
          ],
          "comment": "Globally unique identifier for the attachment.\n",
          "required": true
        }
      ],
      "comment": "Returns the full record for a single attachment.\n"
    },
    {
      "name": "findByTask",
      "method": "GET",
      "path": "/tasks/%d/attachments",
      "collection": true,
      "params": [
        {
          "name": "task",
          "type": "Id",
          "example_values": [
            "124816"
          ],
          "comment": "Globally unique identifier for the task.\n",
          "required": true
        }
      ],
      "comment": "Returns the compact records for all attachments on the task.\n"
    },
    {
      "name": "createOnTask",
      "method": "POST",
      "path": "/tasks/%d/attachments",
      "no_code": true,
      "params": [
        {
          "name": "task",
          "type": "Id",
          "example_values": [
            "124816"
          ],
          "comment": "Globally unique identifier for the task.\n",
          "required": true
        },
        {
          "name": "file",
          "type": "File",
          "example_values": [
            "TBD"
          ],
          "required": true,
          "comment": "TBD"
        }
      ],
      "comment": "Returns the compact records for all attachments on the task.\n"
    }
  ]
};
export = json;
