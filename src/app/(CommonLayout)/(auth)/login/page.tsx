import LoginForm from "@/components/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const loginPage = () => {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center p-4 relative"
        style={{
          backgroundImage: "url('/dino-reichmuth-A5rCN8626Ck-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div className="absolute inset-0 bg-black/30"></div>
        <Card className="relative w-full max-w-md shadow-lg border border-white/30 backdrop-blur-md z-10">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-cyan-700">Login</CardTitle>
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
