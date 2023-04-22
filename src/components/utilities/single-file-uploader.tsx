import { FileRejection, FileCard, FileUploader, Pane } from "evergreen-ui";
import { useCallback, useState } from "react";

const SingleFileUploader = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileRejections, setFileRejections] = useState<FileRejection[]>([]);

  const handleChange = useCallback((files: File[]) => setFiles([files[0]]), []);

  const handleRejected = useCallback(
    (fileRejections: FileRejection[]) => setFileRejections([fileRejections[0]]),
    []
  );

  const handleRemove = useCallback(() => {
    setFiles([]);
    setFileRejections([]);
  }, []);

  return (
    <Pane maxWidth={654}>
      <FileUploader
        label="Upload File"
        description="You can upload 1 file. File can be up to 50 MB."
        maxSizeInBytes={50 * 1024 ** 2}
        maxFiles={1}
        onChange={handleChange}
        onRejected={handleRejected}
        renderFile={(file) => {
          const { name, size, type } = file;

          const fileRejection = fileRejections.find(
            (fileRejection) => fileRejection.file === file
          );

          const { message } = fileRejection || {};

          return (
            <FileCard
              key={name}
              isInvalid={fileRejection != null}
              name={name}
              onRemove={handleRemove}
              sizeInBytes={size}
              type={type}
              validationMessage={message}
            />
          );
        }}
        values={files}
      />
    </Pane>
  );
};

export default SingleFileUploader;
