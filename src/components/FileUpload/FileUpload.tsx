import {
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useDropzone } from "react-dropzone";
import Upload from "../../assets/icons/upload.svg?react";
import styles from "./fileupload.module.css";

interface IProps {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
}

export default function FileUpload({ file, setFile }: IProps) {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];

    if (!uploadedFile) return;

    const isValidType = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ].includes(uploadedFile.type);

    const isValidSize = uploadedFile.size <= 10 * 1024 * 1024;

    if (!isValidType) {
      setError("Only PDF, DOC, DOCX files are allowed.");
      setFile(null);
      return;
    }

    if (!isValidSize) {
      setError("File size must be less than 10MB.");
      setFile(null);
      return;
    }

    setError(null);
    setFile(uploadedFile);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: 10 * 1024 * 1024, // 10 MB
  });

  return (
    <div className={styles.container}>
      <div {...getRootProps({ className: styles.dropzone })}>
        <input {...getInputProps()} />
        {file ? (
          <p className={styles.fileInfo}>Uploaded: {file.name}</p>
        ) : (
          <>
            <Upload className={styles.icon} />
            <p className={styles.title}>Click to upload your EPK</p>
            <p className={styles.subTitle}>
              PDF, DOC, or DOCX files up to 10MB
            </p>
          </>
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
