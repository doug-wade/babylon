{
  "type": "File",
  "start": 0,
  "end": 23,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 2,
      "column": 14
    }
  },
  "program": {
    "type": "Program",
    "start": 0,
    "end": 23,
    "loc": {
      "start": {
        "line": 1,
        "column": 0
      },
      "end": {
        "line": 2,
        "column": 14
      }
    },
    "sourceType": "script",
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 8,
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 8
          }
        },
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 4,
            "end": 7,
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 7
              }
            },
            "id": {
              "type": "Identifier",
              "start": 4,
              "end": 7,
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 1,
                  "column": 7
                }
              },
              "name": "foo"
            },
            "init": null
          }
        ],
        "kind": "let"
      },
      {
        "type": "ExpressionStatement",
        "start": 9,
        "end": 23,
        "loc": {
          "start": {
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 14
          }
        },
        "expression": {
          "type": "BinaryExpression",
          "start": 9,
          "end": 22,
          "loc": {
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 13
            }
          },
          "left": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 3
              }
            },
            "name": "foo"
          },
          "operator": "||=",
          "right": {
            "type": "StringLiteral",
            "start": 17,
            "end": 22,
            "loc": {
              "start": {
                "line": 2,
                "column": 8
              },
              "end": {
                "line": 2,
                "column": 13
              }
            },
            "extra": {
              "rawValue": "foo",
              "raw": "'foo'"
            },
            "value": "foo"
          }
        }
      }
    ],
    "directives": []
  },
  "comments": [],
  "tokens": [
    {
      "type": {
        "label": "let",
        "keyword": "let",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "let",
      "start": 0,
      "end": 3,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 3
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "value": "foo",
      "start": 4,
      "end": 7,
      "loc": {
        "start": {
          "line": 1,
          "column": 4
        },
        "end": {
          "line": 1,
          "column": 7
        }
      }
    },
    {
      "type": {
        "label": ";",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 7,
      "end": 8,
      "loc": {
        "start": {
          "line": 1,
          "column": 7
        },
        "end": {
          "line": 1,
          "column": 8
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "value": "foo",
      "start": 9,
      "end": 12,
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 3
        }
      }
    },
    {
      "type": {
        "label": "||=",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": true,
        "isLoop": false,
        "isAssign": true,
        "prefix": false,
        "postfix": false,
        "binop": 12,
        "updateContext": null
      },
      "value": "||=",
      "start": 13,
      "end": 16,
      "loc": {
        "start": {
          "line": 2,
          "column": 4
        },
        "end": {
          "line": 2,
          "column": 7
        }
      }
    },
    {
      "type": {
        "label": "string",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "foo",
      "start": 17,
      "end": 22,
      "loc": {
        "start": {
          "line": 2,
          "column": 8
        },
        "end": {
          "line": 2,
          "column": 13
        }
      }
    },
    {
      "type": {
        "label": ";",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 22,
      "end": 23,
      "loc": {
        "start": {
          "line": 2,
          "column": 13
        },
        "end": {
          "line": 2,
          "column": 14
        }
      }
    },
    {
      "type": {
        "label": "eof",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 23,
      "end": 23,
      "loc": {
        "start": {
          "line": 2,
          "column": 14
        },
        "end": {
          "line": 2,
          "column": 14
        }
      }
    }
  ]
}
