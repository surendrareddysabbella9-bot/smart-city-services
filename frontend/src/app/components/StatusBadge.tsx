import { Badge } from "./ui/badge";
import { Shield, Clock, XCircle, CheckCircle } from "lucide-react";

type StatusType = "verified" | "pending" | "rejected" | "completed";

interface StatusBadgeProps {
  status: StatusType;
  showIcon?: boolean;
}

export function StatusBadge({ status, showIcon = true }: StatusBadgeProps) {
  const configs = {
    verified: {
      label: "Verified",
      className: "bg-green-100 text-green-800 border-green-200",
      icon: Shield,
    },
    pending: {
      label: "Pending",
      className: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: Clock,
    },
    rejected: {
      label: "Rejected",
      className: "bg-red-100 text-red-800 border-red-200",
      icon: XCircle,
    },
    completed: {
      label: "Completed",
      className: "bg-blue-100 text-blue-800 border-blue-200",
      icon: CheckCircle,
    },
  };

  const config = configs[status];
  const Icon = config.icon;

  return (
    <Badge className={`${config.className} flex items-center gap-1`}>
      {showIcon && <Icon size={12} />}
      {config.label}
    </Badge>
  );
}
