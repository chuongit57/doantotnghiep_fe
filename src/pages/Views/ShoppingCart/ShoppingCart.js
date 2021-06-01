import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
// import Stepper from '@material-ui/core/Stepper'
// import Step from '@material-ui/core/Step'
// import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CheckItemsOrder from './components/CheckItemsOrder'
import {Box, Container} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import {ROUTER_NAME} from '../../../configs'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  doneImg: {
    height: 200,
    width: 200,
  },
}))

function getSteps() {
  return ['Check product items']
}

function getStepContent(step, onNext) {
  switch (step) {
    case 0:
      return <CheckItemsOrder onNext={onNext} />
    default:
      return 'Unknown step'
  }
}

const ShoppingCart = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())
  const steps = getSteps()
  const history = useHistory()

  const isStepSkipped = (step) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleGoHome = () => {
    history.push(ROUTER_NAME.HOME)
  }

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <div>
          {activeStep === steps.length ? (
            <Box textAlign="center">
              <img className={classes.doneImg} src="/image/iconfinder_done.png" alt="" />
              <Typography align="center" className={classes.instructions}>
                Thank you for choosing our products
              </Typography>
              <Button fullWidth variant="outlined" color="primary" onClick={handleGoHome}>
                Go Home
              </Button>
            </Box>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep, handleNext)}</Typography>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default ShoppingCart
