"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import {useRouter} from "next/navigation";

const formSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, {
      message: "username must be at least 3 characters.",
    })
    .max(50),
  email: z.string().trim().email({
    message: "email must be a valid email",
  }),
  password: z.string().trim().min(6, {
    message: "password must contains atleast 6 characters",
  }),
});

const ProfileForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
  });
  async function onSubmit(values) {
    console.log(values);

    try {
      const response = await axios.post("http://localhost:8080/register", values);
      console.log("data sent:", response.data)
      router.push('/login');
    } catch (error) {
      console.log("Error sending data:", error);
    }

    // axios
    //   .post("http://localhost:8080/users", values)
    //   .then((response) => {
    //     console.log("Data sent:", response.data);
    //   })
    //   .catch((error) => {
    //     console.log("error sending data:", error);
    //   });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8 bg-zinc-800 p-20 w-[540px] rounded-xl"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className="rounded-lg bg-stone-400/20"
                  placeholder="john"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="rounded-lg bg-stone-400/20"
                  placeholder="mailjohn@gmail.com"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="rounded-lg bg-stone-400/20"
                  placeholder="******"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="custom" type="submit">
          join
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
