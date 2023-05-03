import React, { useContext, useReducer, useState } from "react";

export interface PostFrontMatter<DateType = string> {
  id: string;
  title: string;
  slug: string;
  summary: string;
  publishedOn: DateType;
  revisedOn: DateType;
  tags: string;
  contact_name: string;
  contact_email: string;
}

const ApplicantContext = React.createContext<JobStateDispatch | null>(null);

interface ApplicantProps extends React.PropsWithChildren {
  postData: PostFrontMatter | null;
}

const ApplicantProvider: React.FC<ApplicantProps> = ({
  children,
  postData,
}) => {
  const [objs, setObjs] = useState([]);

  const postsContext = useReducer(
    ApplicationStateManager,
    ApplicationDirectory,
    (arg) => {
      if (postData) {
        arg.posts.push(postData);
      }

      return arg;
    }
  );

  return (
    <ApplicantContext.Provider value={postsContext}>
      {children}
    </ApplicantContext.Provider>
  );
};

export const useApplicant = () => {
  const context = useContext(ApplicantContext);

  return context;
};

export default ApplicantProvider;

interface JobDirectory {
  index: number;
  posts: PostFrontMatter[];
}

type JobType = "YEAR" | "MAKE" | "MODEL" | "CLEAR" | "CLEAR_MAKE_MODEL";
type JobAction = {
  type: JobType;
  value: string;
};
type JobDispatch = (action: JobAction) => void;
type JobStateDispatch = [JobDirectory, JobDispatch];

const ApplicationDirectory: JobDirectory = { index: 0, posts: [] };

const ApplicationStateManager = (state: JobDirectory, action: JobAction) => {
  return ApplicationDirectory;
};
