import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formSubmitSuccess } from "../functions/formSubmit.js";
import userServices from "../../../services/userServices";
import generator from "generate-password-ts";

export function LoginGoogle({ type, setError }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleCredentialResponse({ email }) {
    if (type === "register") {
      userServices
        .newUser({
          email,
          password: generator.generate({
            length: 10,
            numbers: true,
          }),
        })
        .then((response) => {
          formSubmitSuccess(response, dispatch, navigate);
        })
        .catch((error) => {
          setError(error.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        });
    } else {
      userServices
        .getGoogleUser({
          email,
        })
        .then((response) => {
          formSubmitSuccess(response, dispatch, navigate);
        })
        .catch((error) => {
          setError(error.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        });
    }
  }
  return (
    <div className="googleLogin mx-16">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);

          handleCredentialResponse(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        size="large"
        type="standard"
        useOneTap
        logo_alignment="left"
      />
    </div>
  );
}
