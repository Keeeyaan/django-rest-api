import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "@/api/user";

const useFetchCurrentUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    select: (data) => {
      const startedTask = data.user.tasks.filter(
        (task) => task.status === "started"
      );
      const inProgressTask = data.user.tasks.filter(
        (task) => task.status === "in_progress"
      );
      const completedTask = data.user.tasks.filter(
        (task) => task.status === "completed"
      );

      return { user: data.user, startedTask, inProgressTask, completedTask };
    },
  });
};

export default useFetchCurrentUser;
