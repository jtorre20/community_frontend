import React from 'react';
import { Switch, withRouter} from 'react-router-dom'
import CardContainer from '../containers/CardContainer'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
  },
};


class Menubar extends React.Component {
  constructor() {
    super()

    this.state = {
      activeTab: "/moodpage"
    };
  }
  

  setActiveTab = () => {
    this.setState({activeTab: this.props.location.pathname})
  } 

  render() {
    
    const { classes } = this.props;
    const { activeTab } = this.state;
    
    if (this.props.loggedIn) {
      return (
      
    
        <Paper className={classes.root}>
          <Tabs
            value={activeTab}
            onChange={this.setActiveTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Dashboard" onClick={() => this.props.history.push("/moodpage")} />
            <Tab label="Cards" onClick={() => this.props.history.push("/cards")} />
            <Tab label="My Programs" />
            <Tab label="Tools" />
            
          </Tabs>    
        </Paper>
      
      );
    } else {
      return null
    }

 
  }
}

// Menubar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(withRouter(Menubar));