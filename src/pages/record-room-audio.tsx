/** biome-ignore-all assist/source/organizeImports: biome */
/** biome-ignore-all lint/suspicious/noConsole: biome */
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
  roomId: string;

}

export function RecordRoomAudio() {
  const params = useParams<RoomParams>()

  const isRecordingSupported = !!navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === "function" && typeof window.MediaRecorder === "function";
  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  function stopRecording() {
    setIsRecording(false);

    if (recorder.current && recorder.current.state !== "inactive") {
      recorder.current.stop();
    }
  }

  async function uploadAudio(blob: Blob) {
    const formData = new FormData();

    formData.append('file', blob, 'audio.webm');

    const response = await fetch(`http://localhost:3333/rooms/${params.roomId}/audio`, {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    console.log(result);
  }
  async function startRecording() {
    if (!isRecordingSupported) {
      alert("Gravação de áudio não é suportada neste navegador.");
      return;
    }
    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      }
    });

    recorder.current = new MediaRecorder(audio, {
      mimeType: "audio/webm",
      audioBitsPerSecond: 64_000,
    });

    recorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {

        uploadAudio(event.data);
      }
    }

    recorder.current.onstart = () => {
      console.log("Gravação iniciada");
    }

    recorder.current.onstop = () => {
      console.log("Gravação encerrada/pausada ");
    }

    recorder.current.start();
  }



  return (
    <div className="flex h-screen items-center justify-center flex-col gap-3">
      {isRecording ? <Button onClick={stopRecording}>Parar gravação</Button> : <Button onClick={startRecording}>Gravar áudio</Button>}
      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  )
}