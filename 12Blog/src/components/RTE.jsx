import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'> 
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey="un3retsoi17k0sifcdz7ebnu9eizt0bhkkm4k5vb1jmfp0d5"  // 🔹 Replace with your real TinyMCE API key
            value={value}  // Ensures controlled input
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              readonly: false,  // 🔹 Prevents read-only mode
              plugins: [
                "image", "advlist", "autolink", "lists", "link", "charmap",
                "preview", "anchor", "searchreplace", "visualblocks", "code",
                "fullscreen", "insertdatetime", "media", "table", "help", "wordcount"
              ],
              toolbar: "undo redo | blocks | image | bold italic forecolor | " +
                "alignleft aligncenter alignright alignjustify | bullist numlist " +
                "outdent indent | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(content) => onChange(content)}  // Fix state update
          />
        )}
      />
    </div>
  );
}