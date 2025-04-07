import { SignUp } from "@clerk/clerk-react";
import AuthLayout from "../../components/AuthLayout";

const SignUp = () => (
  <AuthLayout>
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </AuthLayout>
);

export default SignUp;
