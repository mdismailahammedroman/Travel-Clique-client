import LoginForm from "@/components/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const loginPage = () => {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center p-4 relative"
        style={{
          backgroundImage: "url('/jack-ward-rknrvCrfS1k-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card className="relative w-full max-w-md shadow-lg border border-white/30 backdrop-blur-md z-10">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-cyan-600">Login</CardTitle>
          </CardHeader>

          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default loginPage;
