import { A, useSearchParams } from "solid-start";
import { createServerAction$, redirect } from "solid-start/server";
import Counter from "~/components/Counter";

export default function Home() {
  const [searchParams] = useSearchParams();
  const [navigating, {Form}] = createServerAction$(async (form: FormData, {request}) => {
    console.log(form);
    console.log(form.get('q'), 'as query');
    console.log(form.get('file'), 'as file');
    
    const query = form.get("q") as string;
    const file = form.get("file") as File;

    // console.log();
    console.log(file instanceof File);
    
    return redirect(`/?q=${query}`)
  })
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world! {searchParams.q}
      </h1>
      <Counter />
      <Form>
        <input type="text" name="q" />
        <input type="file" name="file" />
        <button type="submit">submit</button>
      </Form>
    </main>
  );
}
