import React from "react";
import * as Survey from "survey-react";
import MenuItem from "@mui/material/MenuItem";
import SelectField from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
/* style Custom */
import "./Select.scss";

export class SelectModel extends Survey.Question {
  //select type in json form to work
  getType() {
    return "selectwidget";
  }
}

export class Select extends Survey.SurveyElementBase {
  constructor(props) {
    super(props);
    this.state = {
      choice: "",
      anchorEl: null,
      open: false,
      placement: "top-start"
    };
  }
  //get datas in json of SurveyJs
  get question() {
    return this.props.question;
  }

  render() {
    const handleClick = (newPlacement) => (e) => {
      this.setState({ anchorEl: e.currentTarget });
      this.setState({ open: !this.state.open });
    };
    const handleChangeValue = (e) => {
      this.question.setValueCore(e.target.value);
      this.setState({ choice: e.target.value });
    };

    if (!this.question) return null;
    return (
      <div className="select-widget">
        <div className="select">
          {this.question.icon?.left ? (
            <div className="icons">
              <i className={this.question.icon?.left} aria-hidden="true"></i>
            </div>
          ) : null}
          <FormControl required={this.question.isRequired} fullWidth>
            <InputLabel>{this.question.title}</InputLabel>
            <SelectField
              fullWidth
              name={this.question.name}
              value={this.state.choice}
              onChange={handleChangeValue}
            >
              {this.question.choices.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </SelectField>
          </FormControl>
          {this.question.help ? (
            <div className="icons">
              <Button onClick={handleClick("top-start")}>
                <i className={this.question.help.icon} aria-hidden="true"></i>
              </Button>
              <Popper
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                placement={this.state.placement}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                      <Typography className="popper" sx={{ p: 2 }}>
                        <span className="h5">
                          {this.question.help.title}
                          <dfn>{this.question.name}</dfn>
                        </span>
                        <span className="text">{this.question.help.text}</span>
                      </Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </div>
          ) : null}
          {this.question.icon?.right ? (
            <div className="icons">
              <i className={this.question.icon?.right} aria-hidden="true"></i>
            </div>
          ) : null}
        </div>
        {/*
        <pre>{JSON.stringify(this.question, null, 2)}</pre>
        */}
      </div>
    );
  }
}

/* Add attributs. Warning : attributes with arrays must be filled */
Survey.Serializer.addClass(
  "selectwidget",
  [
    {
      name: "icon"
    },
    {
      name: "choices"
    },
    {
      name: "help"
    }
  ],
  function () {
    return new SelectModel("");
  },
  "question"
);

Survey.ReactQuestionFactory.Instance.registerQuestion(
  "selectwidget",
  (props) => {
    return React.createElement(Select, props);
  }
);
