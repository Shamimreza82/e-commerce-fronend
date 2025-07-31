/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { z } from 'zod';
// Assuming Firebase is set up and initialized elsewhere, e.g., in a lib file
// import { auth } from '@/lib/firebase'; 

const signinSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export async function signIn(prevState: any, formData: FormData) {
  const validatedFields = signinSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    // TODO: Implement Firebase Authentication sign-in logic
    // For example: await auth.signInWithEmailAndPassword(email, password);
    console.log('Attempting to sign in with:', { email, password });

    // Return a success message or redirect the user
    return { message: 'Sign in successful!' };

  } catch (error) {
    // TODO: Handle Firebase Authentication errors
    console.error('Sign in failed:', error);
    return { 
      message: 'Sign in failed', 
      error: error instanceof Error ? error.message : String(error) 
    };
  }
}

export async function register(prevState: any, formData: FormData) {
  const validatedFields = registerSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    // TODO: Implement Firebase Authentication registration logic
    // For example: const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    // await userCredential.user.updateProfile({ displayName: name });
    console.log('Attempting to register with:', { name, email, password });

    // Return a success message or redirect the user
    return { message: 'Registration successful!' };

  } catch (error) {
    // TODO: Handle Firebase Authentication errors
    console.error('Registration failed:', error);
    return { 
      message: 'Registration failed', 
      error: error instanceof Error ? error.message : String(error) 
    };
  }
}

export async function getUser() {
  // TODO: Implement Firebase Authentication to get the current user
  // For example: return auth.currentUser;
  return {
    name: "Test User",
    email: "test@example.com",
    role: "user",
  };
}

export async function becomeSeller() {
  // TODO: Implement logic to update user role to "seller" in your database
  console.log("User is now a seller");
}

export async function signOut() {
  // TODO: Implement Firebase Authentication sign-out logic
  // For example: await auth.signOut();
  console.log("User signed out");
}