'use client';

import { UploadIcon } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from '@/components/ui/dropzone';
import { cn } from '@/lib/utils';

export interface AvatarDropzoneProps {
  value?: File | string | null;
  onChange?: (file: File | null) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  userName?: string;
}

export function AvatarDropzone({
  value,
  onChange,
  name = 'avatar',
  disabled = false,
  className,
  userName = '',
}: AvatarDropzoneProps) {
  // Track file for uploads
  const [file, setFile] = useState<File | null>(
    value instanceof File ? value : null,
  );

  // Derive preview URL from value prop or file state
  const previewUrl = useMemo(() => {
    if (file) {
      return URL.createObjectURL(file);
    }
    if (typeof value === 'string' && value) {
      return value;
    }
    return null;
  }, [file, value]);

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const newFile = acceptedFiles[0];
        setFile(newFile);
        onChange?.(newFile);
      }
    },
    [onChange],
  );

  // Determine if we have a preview (file or existing avatar)
  const hasPreview = !!previewUrl;

  return (
    <div className={cn('size-40', className)}>
      <Dropzone
        accept={{
          'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
        }}
        maxFiles={1}
        maxSize={2 * 1024 * 1024} // 2MB
        onDrop={handleDrop}
        disabled={disabled}
        src={file ? [file] : hasPreview ? [] : undefined}
        className="aspect-square w-full overflow-hidden rounded-full"
      >
        {hasPreview ? (
          <DropzoneContent>
            <div className="absolute inset-0">
              <img
                src={previewUrl}
                alt={userName || 'Avatar preview'}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 rounded-full bg-black/50 p-4 opacity-0 transition-opacity hover:opacity-100">
              <p className="text-sm font-medium text-white">Change avatar</p>
              <p className="text-xs text-white/80">
                Drag and drop or click to replace
              </p>
            </div>
          </DropzoneContent>
        ) : (
          <DropzoneEmptyState>
            <UploadIcon className="size-6" />
            <p className="text-sm font-medium">Upload avatar</p>
            <p className="text-xs text-muted-foreground">
              Drag and drop or click to upload
            </p>
            <p className="text-xs text-muted-foreground">
              PNG, JPG, GIF up to 2MB
            </p>
          </DropzoneEmptyState>
        )}
      </Dropzone>
      <input type="hidden" name={name} value={file?.name || ''} />
    </div>
  );
}
