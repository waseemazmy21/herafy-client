import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePathname } from "next/navigation";

function LoginForm() {
  return (
    <div className="flex justify-center p-8">
      <form>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
            <CardDescription>
              أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-4">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-4">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-gradient-hover w-full">تسجيل الدخول</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default LoginForm;
