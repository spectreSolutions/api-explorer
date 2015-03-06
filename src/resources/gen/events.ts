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
  "name": "event",
  "comment": "An _event_ is an object representing a change to a resource that was observed\nby an event subscription.\n\nIn general, requesting events on a resource is faster and subject to higher\nrate limits than requesting the resource itself. Additionally, change events\nbubble up - listening to events on a project would include when stories are\nadded to tasks in the project, even on subtasks.\n\nEstablish an initial sync token by making a request with no sync token.\nThe response will be a `412` error - the same as if the sync token had\nexpired.\n\nSubsequent requests should always provide the sync token from the immediately\npreceding call.\n\nSync tokens may not be valid if you attempt to go 'backward' in the history\nby requesting previous tokens, though re-requesting the current sync token\nis generally safe, and will always return the same results.\n\nWhen you receive a `412 Precondition Failed` error, it means that the\nsync token is either invalid or expired. If you are attempting to keep a set\nof data in sync, this signals you may need to re-crawl the data.\n\nSync tokens always expire after 24 hours, but may expire sooner, depending on\nload on the service.\n",
  "properties": [
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
          "name": "story",
          "comment": "A story."
        }
      ],
      "example_values": [
        "'task'"
      ],
      "read_only": true,
      "comment": "The type of object the event occurred on.\n",
      "notes": [
        "The resource that triggered the event may be different from the one\nthat the events were requested for. For example, a subscription to a\nproject will contain events for tasks contained within the project.\n"
      ]
    }
  ],
  "actions": [
    {
      "name": "get",
      "method": "GET",
      "path": "/events",
      "collection": true,
      "no_code": true,
      "params": [
        {
          "name": "resource",
          "type": "Id",
          "example_values": [
            "12345"
          ],
          "required": true,
          "explicit": true,
          "comment": "A resource ID to subscribe to. The resource can be a task or project.\n"
        },
        {
          "name": "sync",
          "type": "String",
          "explicit": true,
          "example_values": [
            "'de4774f6915eae04714ca93bb2f5ee81'"
          ],
          "comment": "A sync token received from the last request, or none on first sync.\nEvents will be returned from the point in time that the sync token\nwas generated.\n",
          "notes": [
            "On your first request, omit the sync token. The response will be the\nsame as for an expired sync token, and will include a new valid\nsync token.\n",
            "If the sync token is too old (which may happen from time to time)\nthe API will return a `412 Precondition Failed` error, and include\na fresh `sync` token in the response.\n"
          ]
        }
      ],
      "comment": "Returns the full record for all events that have occurred since the\nsync token was created.\n"
    }
  ]
};
export = json;
