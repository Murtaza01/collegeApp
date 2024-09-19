import { redirect } from "react-router-dom";
import { getAuthStorage } from "../util/helpers";


export default function RedirectPage() {
  return;
}

export async function loader() {
  const storageData = await getAuthStorage()
  if (storageData) {
    const { stage } = storageData
    // because if stage exist, that means they are auth
    if (stage) {
      return redirect(stage)
    } else {
      return redirect('/authorize')
    }
  } else {
    return redirect('/authorize')
  }
}
