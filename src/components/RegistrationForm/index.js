import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {isLast: false, isFirst: false, initial: true, first: '', second: ''}

  submit = event => {
    const {first, second} = this.state
    event.preventDefault()
    if (first !== '' && second !== '') {
      this.setState({initial: false})
    } else if (first === '' && second === '') {
      this.setState({isLast: true, isFirst: true})
    } else if (first === '' && second !== '') {
      this.setState({isFirst: true})
    } else if (first !== '' && second === '') {
      this.setState({isLast: true})
    }
  }

  second = event => {
    event.preventDefault()
    this.setState({initial: true})
  }

  secondContainer = () => (
    <form className="secContainer" onSubmit={this.second}>
      <div className="secContainer1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
          alt="success"
          className="success"
        />
        <p className="submit">Submitted Successfully</p>
        <button type="submit" className="btn">
          Submit Another Response
        </button>
      </div>
    </form>
  )

  first = event => {
    if (event.target.value === '') {
      this.setState({isFirst: true})
    } else {
      this.setState({isFirst: false, first: event.target.value})
    }
  }

  Last = event => {
    if (event.target.value === '') {
      this.setState({isLast: true})
    } else {
      this.setState({isLast: false, second: event.target.value})
    }
  }

  firstName = () => (
    <>
      <label htmlFor="chandrayan" className="label">
        FIRST NAME
      </label>
      <br />
      <input
        type="text"
        id="chandrayan"
        placeholder="First name"
        className="input"
        onBlur={this.first}
      />
    </>
  )

  LastName = () => (
    <>
      <label htmlFor="chandrayan2" className="label">
        LAST NAME
      </label>
      <br />
      <input
        type="text"
        id="chandrayan2"
        placeholder="Last name"
        className="input"
        onBlur={this.Last}
      />
    </>
  )

  render() {
    const {isLast, isFirst, initial} = this.state
    return (
      <div className="RegistrationContainer">
        <h1 className="heading">Registration</h1>
        {initial ? (
          <>
            <form className="secContainer" onSubmit={this.submit}>
              <div className="FirstNameContainer">
                {this.firstName()}
                {isFirst && <p className="error">Required</p>}
              </div>
              <div className="FirstNameContainer">
                {this.LastName()}
                {isLast && <p className="error">Required</p>}
              </div>
              <button type="submit" className="button">
                submit
              </button>
            </form>
          </>
        ) : (
          this.secondContainer()
        )}
      </div>
    )
  }
}

export default RegistrationForm
