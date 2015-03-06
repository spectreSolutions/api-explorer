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
  "name": "workspace",
  "comment": "A _workspace_ is the highest-level organizational unit in Asana. All projects\nand tasks have an associated workspace.\n\nAn _organization_ is a special kind of workspace that represents a company.\nIn an organization, you can group your projects into teams. You can read\nmore about how organizations work on the Asana Guide.\nTo tell if your workspace is an organization or not, check its\n`is_organization` property.\n\nOver time, we intend to migrate most workspaces into organizations and to\nrelease more organization-specific functionality. We may eventually deprecate\nusing workspace-based APIs for organizations. Currently, and until after\nsome reasonable grace period following any further announcements, you can\nstill reference organizations in any `workspace` parameter.\n",
  "properties": [
    {
      "name": "id",
      "type": "Id",
      "example_values": [
        "1234"
      ],
      "read_only": true,
      "comment": "Globally unique identifier for this object.\n"
    },
    {
      "name": "name",
      "type": "String",
      "example_values": [
        "Apollo Moon Landing"
      ],
      "comment": "The name of the workspace.\n"
    },
    {
      "name": "is_organization",
      "type": "Boolean",
      "example_values": [
        "false"
      ],
      "comment": "True iff the workspace is an _organization_.\n"
    }
  ],
  "actions": [
    {
      "name": "findById",
      "method": "GET",
      "path": "/workspaces/%d",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "Globally unique identifier for the workspace or organization.\n",
          "required": true
        }
      ],
      "comment": "Returns the full workspace record for a single workspace.\n"
    },
    {
      "name": "findAll",
      "method": "GET",
      "path": "/workspaces",
      "collection": true,
      "comment": "Returns the compact records for all workspaces visible to the authorized user.\n"
    },
    {
      "name": "update",
      "method": "PUT",
      "path": "/workspaces/%d",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "The workspace to update.",
          "required": true
        }
      ],
      "comment": "Update properties on a workspace. Returns the complete, updated workspace record.\n"
    },
    {
      "name": "typeahead",
      "method": "GET",
      "path": "/workspaces/%d/typeahead",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "The workspace to fetch objects from.",
          "required": true
        },
        {
          "name": "type",
          "type": "Enum",
          "values": [
            {
              "name": "task",
              "comment": "A task."
            },
            {
              "name": "project",
              "comment": "A project."
            },
            {
              "name": "user",
              "comment": "A user."
            },
            {
              "name": "tag",
              "comment": "A tag."
            }
          ],
          "required": true,
          "comment": "The type of values the typeahead should return.\nNote that unlike in the names of endpoints, the types listed here are\nin singular form (e.g. `task`). Using multiple types is not yet supported.\n"
        },
        {
          "name": "query",
          "type": "String",
          "comment": "The string that will be used to search for relevant objects. If an\nempty string is passed in, the API will currently return an empty\nresult set.\n"
        },
        {
          "name": "count",
          "type": "Number",
          "comment": "The number of results to return. The default is `20` if this\nparameter is omitted, with a minimum of `1` and a maximum of `100`.\nIf there are fewer results found than requested, all will be returned.\n"
        }
      ],
      "collection": true,
      "comment": "Retrieves objects in the workspace based on an auto-completion/typeahead\nsearch algorithm. This feature is meant to provide results quickly, so do\nnot rely on this API to provide extremely accurate search results. The\nresult set is limited to a single page of results with a maximum size,\nso you won't be able to fetch large numbers of results.\n"
    }
  ]
};
export = json;
