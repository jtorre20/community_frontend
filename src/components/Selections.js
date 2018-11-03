import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import DateTimePicker from 'react-datetime-picker'




const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const moods = [
  'Anger',
  'Fear',
  'Disgust',
  'Happiness',
  'Sadness',
  'Surprise',
  'Contempt',
];

const intensity = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
]

class MultipleSelect extends React.Component {

  constructor(){
    super()

    this.state = {
      active: false
    }
  }


  
  
  render() {
    const { classes, theme } = this.props;
    return (
      // <div className={classes.root}>
      <div className="container">
      <div className="row">
        
         <p className="col-md white-text">Anger
         <FormControl className={classes.formControl}>
          <InputLabel className="white-text" htmlFor="select-checkbox">Intensity</InputLabel>
          <Select
            name="anger"
            value={this.props.moodIntensity.anger}
            onChange={this.props.updateMoodIntensity}
            // input={<Input id="select-checkbox" />}
            renderValue={selected => selected}
            MenuProps={MenuProps}
          >
            {intensity.map(intensity => (
              <MenuItem key={intensity} value={intensity}>
                <ListItemText primary={intensity} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </p>

        <p className="col-md white-text">Fear
         <FormControl className={classes.formControl}>
          <InputLabel className="white-text" htmlFor="select-checkbox">Intensity</InputLabel>
          <Select
            name="fear"
            value={this.props.moodIntensity.fear}
            onChange={this.props.updateMoodIntensity}
            // input={<Input id="select-checkbox" />}
            renderValue={selected => selected}
            MenuProps={MenuProps}
          >
            {intensity.map(intensity => (
              <MenuItem key={intensity} value={intensity}>
                <ListItemText primary={intensity} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </p>

        <p className="col-md white-text">Disgust
         <FormControl className={classes.formControl}>
          <InputLabel className="white-text" htmlFor="select-checkbox">Intensity</InputLabel>
          <Select
            name="disgust"
            value={this.props.moodIntensity.disgust}
            onChange={this.props.updateMoodIntensity}
            input={<Input id="select-checkbox" />}
            renderValue={selected => selected}
            MenuProps={MenuProps}
          >
            {intensity.map(intensity => (
              <MenuItem key={intensity} value={intensity}>
                <ListItemText primary={intensity} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </p>
        

        <p className="col white-text">Happiness
         <FormControl className={classes.formControl}>
          <InputLabel className="white-text" htmlFor="select-checkbox">Intensity</InputLabel>
          <Select
            name="happiness"
            value={this.props.moodIntensity.happiness}
            onChange={this.props.updateMoodIntensity}
            input={<Input id="select-checkbox" />}
            renderValue={selected => selected}
            MenuProps={MenuProps}
          >
            {intensity.map(intensity => (
              <MenuItem key={intensity} value={intensity}>
                <ListItemText primary={intensity} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </p>

          <p className="col white-text">Sadness
         <FormControl className={classes.formControl}>
          <InputLabel className="white-text" htmlFor="select-checkbox">Intensity</InputLabel>
          <Select
            name="sadness"
            value={this.props.moodIntensity.sadness}
            onChange={this.props.updateMoodIntensity}
            input={<Input id="select-checkbox" />}
            renderValue={selected => selected}
            MenuProps={MenuProps}
          >
            {intensity.map(intensity => (
              <MenuItem key={intensity} value={intensity}>
                <ListItemText primary={intensity} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </p>

          <p className="col white-text">Surprise
         <FormControl className={classes.formControl}>
          <InputLabel className="white-text" htmlFor="select-checkbox">Intensity</InputLabel>
          <Select
            name="surprise"
            value={this.props.moodIntensity.surprise}
            onChange={this.props.updateMoodIntensity}
            input={<Input id="select-checkbox" />}
            renderValue={selected => selected}
            MenuProps={MenuProps}
          >
            {intensity.map(intensity => (
              <MenuItem key={intensity} value={intensity}>
                <ListItemText primary={intensity} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </p>

        <p className="col white-text">Contempt
         <FormControl className={classes.formControl}>
          <InputLabel className="white-text" htmlFor="select-checkbox">Intensity</InputLabel>
          <Select
            name="contempt"
            value={this.props.moodIntensity.contempt}
            onChange={this.props.updateMoodIntensity}
            input={<Input id="select-checkbox" />}
            renderValue={selected => selected}
            MenuProps={MenuProps}
          >
            {intensity.map(intensity => (
              <MenuItem key={intensity} value={intensity}>
                <ListItemText primary={intensity} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </p>
      </div>
      </div>
       
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);