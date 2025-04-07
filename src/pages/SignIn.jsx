import { SignIn } from "@clerk/clerk-react";
import AuthLayout from "../../components/AuthLayout";

const SignIn = () => (
  <AuthLayout>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </AuthLayout>
);

export default SignIn;
