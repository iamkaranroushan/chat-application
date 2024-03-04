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
import { useRouter } from "next/navigation";
import axios from "axios";

const loginSchema = z.object({
  email: z.string().trim().email({
    message: "email must be a valid email",
  }),
  password: z.string().trim().min(6, {
    message: "password must contains atleast 6 characters",
  }),
});

const LoginForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  async function onSubmit(values) {
    try {
      const response = await axios.post("http://localhost:8080/login", values, {
        withCredentials: true,
      });
      if (response.status===200) {
        console.log("success:",response.data.message);
        router.push("/chat");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 400) {
          console.log("Error: User not found");
        } else if (error.response.status === 401) {
          console.log("Error: Invalid credentials");
        } else if (error.response.status === 500) {
          console.log("Error: Internal server error");
        }
      } else {
        console.log("Error:", error.message);
      }
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8 bg-zinc-800 p-20 w-[540px] rounded-xl"
      >
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
          login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
