"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";
interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });
    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,

    //onEditorContentChange: (editor: BlockNoteEditor) => onChange(JSON.stringify(editor.document, null, 2))
  });

  return (
    <div>
      <BlockNoteView
        editable
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => onChange(JSON.stringify(editor.document, null, 2))}
      ></BlockNoteView>
    </div>
  );
};

export default Editor;
