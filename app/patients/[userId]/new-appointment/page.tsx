import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <div className="flex flex-col lg:flex-row gap-x-10">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="Logo"
              className="mb-12 h-10 w-fit"
            />
            <Image
              src="/assets/images/fahis-logo-white.png"
              height={1000}
              width={1000}
              alt="Logo"
              className="mb-12 h-10 w-fit"
            />
          </div>
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />
          <p className="copyright mt-10">© 2024 CarePlus</p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="Doctors Welcome"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
