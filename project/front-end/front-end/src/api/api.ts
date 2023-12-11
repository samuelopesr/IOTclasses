import axios from "axios";

export async function getRotaPadrao() {
  const data = await axios.get("http://localhost:3001/status");
  return data.data;
}

export async function postRota(body: bodyType) {
  const res = await axios.post("http://localhost:3001/teste", { body })

  return res
}


type bodyType = {
  numero: number,
  texto: string
}