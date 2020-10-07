import React from "react";
import {
  makeStyles,
  createStyles,
  withStyles
} from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TableDetailsData from './tableDetailsData'
import RFQFloat from './rfqFloat'
import Quotation from './Quotation'
import Design from './Design'
import Testing from './Testing'
import SopLaunch from './SopLaunch'


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundColor:"#0C961C"
    }
  },
  completed: {
    "& $line": {
      backgroundColor:"#0C961C" 
    }
  },
  line: {
    height: 5,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 2
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundColor:"#343A52",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundColor:"#0C961C"
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: "IL1",
    2: "IL2",
    3: "IL3",
    4: "IL4",
    5: "IL5",
    6: "IL6",
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    button: {
      marginRight: theme.spacing(1),
      float:'right',
      // marginRight:60,
      backgroundColor:'#343A52',
      borderRadius: 7,
      fontSize: 12,
      padding: "10px 20px",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
);

function getSteps() {
  return ["Prepapration", "RFQ Float", "Quotation","Design","Testing", "SOP Launch" ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <TableDetailsData/>
      case 1:
      return <RFQFloat/>;
    case 2:
      return <Quotation />;
    case 3:
      return <Design />;
    case 4:
      return <Testing />;
      case 4:
      return <SopLaunch/>;    
    default:
      return "Unknown step";
  }
}

export default function TableDetails() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
      
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
                style={{backgroundColor:'#EE2219',color:"white",marginRight:70}}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}