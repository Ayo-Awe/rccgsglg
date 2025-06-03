import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { X } from "lucide-react";

interface WordOfTheWeekModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WordOfTheWeekModal({
  isOpen,
  onClose,
}: WordOfTheWeekModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[812px] p-0 overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Image
                src="/rccg-logo.svg"
                alt="RCCG Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <h2 className="text-xl font-medium">God's word for the week</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              The Most High God sits enthroned in the heavenly forever, to
              continually bless us in His grace & mercy, strength & power, peace &
              fullness of joy, wealth & health, name it in His overflowing
              sufficiencies & abundance through His absolute power in Christ Jesus
              amen!!
            </p>

            <p className="text-gray-500 text-sm">
              Psalm 29:1-11; Acts11:4-24; 1Cor3:8-22; Rom6:1-23; Psalm84:1-12;
              Heb2:1-18
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}