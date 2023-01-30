import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const GoogleAuth = () => {
//   const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
//     useAuth0();
//   return (
//     <>
//       <button onClick={loginWithRedirect}>login</button>
//       <button
//         onClick={() => {
//           logout({ returnTo: window.location.origin });
//         }}
//       >
//         logout
//       </button>
//     </>
//   );
// };

// export default GoogleAuth;

import { connect } from "react-redux";
import { signIn, signOut } from "../utilities/actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "740874031229-un91fi812tnnsvbfd4aqqq51ombkfc5l.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "MovieDB",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return <button onClick={this.onSignOutClick}>Logout</button>;
    } else {
      return <button onClick={this.onSignInClick}>Login</button>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
