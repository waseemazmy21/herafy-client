import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { error } from "console";

type AlertProps = {
  variant: "default" | "destructive";
  message: string;
  errors: string[];
};

const AlertComponent = ({
  variant = "default",
  message,
  errors = [],
}: AlertProps) => {
  return (
    <Alert variant={variant} className="mx-auto my-4 max-w-xl">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{message}</AlertTitle>
      {errors.length && (
        <AlertDescription>
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </AlertDescription>
      )}
    </Alert>
  );
};

export default AlertComponent;
