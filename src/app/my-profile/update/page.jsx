"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function UpdateProfilePage() {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleUpdate = async (data) => {

        await authClient.updateUser({
            image: data.photo,
            name: data.name,
        })


    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-md w-80">

                <h2 className="text-xl font-bold text-center mb-4">
                Update Profile
                </h2>

                <form onSubmit={handleSubmit(handleUpdate)} className="space-y-3">

                    <div>
                        <input
                            type="text"
                            placeholder="New Name"
                            {...register("name", { required: "Name required" })}
                            className="w-full border p-2 rounded"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Image URL"
                            {...register("image", { required: "Image required" })}
                            className="w-full border p-2 rounded"
                        />
                        {errors.image && (
                            <p className="text-red-500 text-sm">
                                {errors.image.message}
                            </p>
                        )}
                    </div>

                    <button className="btn w-full bg-linear-to-r from-red-500 to-orange-400 text-white">
                        Update
                    </button>

                </form>

            </div>

        </div>
    );
}