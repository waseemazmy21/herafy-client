import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type AlertProps = {
  variant: "default" | "destructive";
  message: string;
};

const AlertComponent = ({ variant = 'default', message }: AlertProps) => {
  return (
    <Alert variant={variant} className="mx-auto my-4 max-w-xl">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertComponent;
