import AuthForm from "./auth-form";

export default function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1 className="header font-bold text-lg">EMDR Connect</h1>
          <p>
            Connect securely with your client from anywhere for a telehealth
            EMDR therapy session.<br></br> Send a "magic link" to your email
            below to sign in.
          </p>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div className="auth-widget">
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
}
