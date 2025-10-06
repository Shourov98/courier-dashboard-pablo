import RecentActivity from "@/component/dashboard/recentActivity";
import WorkloadMetrics from "@/component/dashboard/workloadMatrix";

export default function DashboardPage() {
  return <div>
    <WorkloadMetrics/>
    <RecentActivity/>
    </div>;
}
