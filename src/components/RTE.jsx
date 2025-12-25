import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';

//Editor is the Tool Box where we can customize the text
//Controller is used to wrap the Editor component to integrate it with react-hook-form

//For Specific post adding we need to connect name/slug with content(RTE/Editor) so that we use controller 

export default function RTE({name, control, label, defaultValue =""}) {  //lsbel is input text i.e Content 
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}   {/* if label exists then only render the label element */}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (  //field is a particular word or sentence selected in the Editor
        <Editor
        apiKey="c95q44dar4llrs3fj1v0ae8fs6k732iypxdbcc1ldnh2s7jb"  //apiKey is unique key to identify the user
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "preview",
                "anchor",
                "searchreplace",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}