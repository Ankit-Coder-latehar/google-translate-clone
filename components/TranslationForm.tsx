"use client"

import { TranslationLanguages } from "@/app/translate/page"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "./ui/textarea"
import { useState } from "react"


function TranslationForm({languages}: {languages: TranslationLanguages}) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <div>
      <form >
        <div>
      <Select name="inputLanguage" defaultValue="auto">
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Want us to figure it out?</SelectLabel>
          <SelectItem key="auto" value="auto">Auto-Detection</SelectItem>
        </SelectGroup>
        
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {Object.entries(languages.translation).map(([key,value])=>(
            <SelectItem key={key} value={key}>{value.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>

    <Textarea placeholder="Enter your message here" className="min-h-32 text-xl" name="input" value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>

    <div>
      <Select name="outputLanguage" defaultValue="es">
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Want us to figure it out?</SelectLabel>
          <SelectItem key="auto" value="auto">Auto-Detection</SelectItem>
        </SelectGroup>
        
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          {Object.entries(languages.translation).map(([key,value])=>(
            <SelectItem key={key} value={key}>{value.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>

    <Textarea placeholder="Enter your message here" className="min-h-32 text-xl" name="output" value={output} onChange={(e)=> setOutput(e.target.value)}/>
    </div>

    <div>
      <button type="submit">Submit</button>
    </div>
      </form>
    </div>
  )
}

export default TranslationForm