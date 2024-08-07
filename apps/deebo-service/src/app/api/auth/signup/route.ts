import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: Request) {
  try {
    const { email, password, nickname, birthday, gender, type } =
      await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname: String(nickname),
          birthday,
          gender,
          type,
        },
      },
    });

    if (authError) {
      console.error("Supabase auth error:", authError);
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: "User creation failed" },
        { status: 400 }
      );
    }

    // // Insert user data into public.users table
    // const { data: userData, error: userError } = await supabase
    //   .from("user") // Assuming you have a 'users' table in the public schema
    //   .insert({
    //     id: authData.user.id,
    //     email: authData.user.email,
    //     nickname,
    //     birthday,
    //     gender,
    //   })
    //   .select();

    // if (userError) {
    //   console.error("User data insertion error:", userError);
    //   // Consider handling this error, possibly by deleting the created auth user
    //   return NextResponse.json(
    //     { error: "Failed to create complete user profile" },
    //     { status: 500 }
    //   );
    // }

    return NextResponse.json(
      { message: "User created successfully", user: authData.user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
