import TranslationForm from "@/components/TranslationForm";
import {auth} from "@clerk/nextjs/server"

export type TranslationLanguages = {
  translation:{
    [key:string]:{
      name: string;
      nativeName: string;
      dir: "ltr"| "rtl";
    };
  };
};

 async function Translatepage() {
    auth().protect();

    const {userId} = auth();
    if(!userId) throw new Error("User not logged in");

    const languageEndpoint = "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0";

    const response = await fetch(languageEndpoint, {
      next: {
        revalidate: 60*60*24,
      }
    });

    const languages = (await response.json()) as TranslationLanguages;
  return (
    <div>
      {/* Translationform */}
      <TranslationForm languages={languages}/>

      {/* TranslationHistory */}
    </div>
  )
}

export default Translatepage