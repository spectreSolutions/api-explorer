/// <reference path="../asana.d.ts" />
/// <reference path="../resources/interfaces.ts" />
import Asana = require("asana");
import cx = require("../class_names");
import React = require("react/addons");

var r = React.DOM;

/**
 * The parameter input area
 */
class ParameterEntry extends React.Component<ParameterEntry.Props, {}> {
  static create = React.createFactory(ParameterEntry);

  private useWorkspaceDropdown = (parameter: Parameter) => {
    // Ensure workspaces have loaded successfully.
    if (this.props.workspaces === undefined) {
      return false;
    }

     return parameter.name === "workspace" || parameter.name === "organization";
  };

  private renderParameterInput = (parameter: Parameter) => {
    var classes = cx({
      "parameter-input": true,
      "required-param": parameter.required
    });
    var id = "parameter_input_" + parameter.name;

    // We pre-fetch workspaces, so show a dropdown instead.
    if (this.useWorkspaceDropdown(parameter)) {
      return r.span({ key: parameter.name },
        r.label({ },
          "Workspace"
        ),
        r.select({
          id: id,
          className: classes,
          onChange: this.props.onParameterChange(parameter),
          value: this.props.workspace.id.toString(),
          children: this.props.workspaces.map(workspace => {
            return r.option({
              value: workspace.id.toString()
            }, workspace.name);
          })
        })
      );
    } else {
      return r.span({ key: parameter.name },
        r.label({ },
          parameter.name
        ),
        r.input({
          placeholder: parameter.name,
          type: "text",
          id: id,
          className: classes,
          onChange: this.props.onParameterChange(parameter)
        })
      );
    }
  };

  render() {
    return r.div({
        className: "parameter-entry",
        children: [
          this.props.text,
          r.div({
            className: "parameter-inputs"
          }, this.props.parameters === undefined ? "" :
            this.props.parameters.map(this.renderParameterInput))
        ]
      }
    );
  }
}

module ParameterEntry {
  export interface Props {
    text: React.DOMElement<any>;
    parameters: Parameter[];
    onParameterChange:
      (parameter: Parameter) => (event?: React.FormEvent) => void;
    workspace: Asana.resources.Workspace;
    workspaces: Asana.resources.Workspace[];
  }
}

export = ParameterEntry;
