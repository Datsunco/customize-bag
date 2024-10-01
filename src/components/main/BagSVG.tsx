interface BagSVGProps {
  selectedPoint: string | null;
  onPointChange: (color: string) => void;
  // onColorChange: (color: string) => void;
  selectedColors: {
    front: string;
    right: string;
    strap: string;
  };
}

const BagSVG: React.FC<BagSVGProps> = ({
  selectedPoint,
  onPointChange,
  selectedColors,
}) => {

  return (
    <svg
      width="1387"
      height="2048"
      viewBox="0 0 1387 2048"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <rect width="1387" height="2048" fill="url(#pattern0_735_14000)" />
      <path
        d="M1104.5 1456V805.5V801.5H1094H1045H1016.5L993.5 798.5L991.5 783L989.5 836.5L985 906L979.5 1003.5L977 1070.5L975 1138.5L973.5 1194.5L971 1273.5L967 1350L964 1456L967 1505L977 1543L1012 1561H1051L1082 1551L1097.5 1534L1104.5 1493.5V1456Z"
        fill={selectedColors.right != "" ? selectedColors.right : "transparent"}
        opacity={0.3}
        className="hover:fill-blue-500"
        onClick={() => onPointChange("right")}
      />
      <path
        d="M971 876L975.5 789.5V782L935.5 786L817.5 792H773L771 799.5V825L768.5 864.5L762.5 920L761 943.5L759.5 984.5L753 1067L738 1079.5L730.5 1064L735.5 1011L738 961V921.5L740 864.5L738 796L678.5 799.5L620.5 801.5L559 805L514.5 807L516 841.5L518.5 889.5V934V1011L513 1064L503 1076.5L495.5 1079.5L482.5 1059L486.5 1019L489.5 992.5L493 942.5L495.5 878.5V808.5H488L306.5 812L300.5 815.5L302.5 848.5V867.5V907V1006L298 1105.5L295.5 1200.5L291.5 1263L287.5 1316L282 1375L279 1423.5L284.5 1446L293.5 1459.5L311.5 1470.5L382 1478L452.5 1486L533.5 1495.5L692 1519L883 1549L976.5 1564.5L956.5 1543L950.5 1515.5V1455L954 1394.5L960 1223L971 876Z"
        fill={selectedColors.front != "" ? selectedColors.front : "transparent"}
        opacity={0.3}
        className="hover:fill-blue-500"
        onClick={() => onPointChange("front")}
      />
      <path
        d="M512.5 1057.5L499.5 1076L482 1057.5L484 1035L486.5 1018L490 995.5L492 978L493.5 951V928L495 906L496.5 889V859.5V832.5L494.5 807.5H489L494.5 790.5L496.5 766.5L498 747V727.5L496.5 711.5V691.5L492.5 666V634.5L496.5 599L504 571.5L519 539L535 515.5L553.5 493.5L576.5 475L591.5 467L614.5 461.5H634.5L654 468.5L668 471.5L693 484.5L717.5 479.5L744 475L768.5 479.5L803 499L826.5 523L849.5 567.5L863.5 615.5L867 643.5L870 687L867 698.5V724L873 763.5L876 787.5L839.5 790.5L849.5 753.5L852.5 719.5L846.5 675L839.5 648L824 615.5L803 580L781 551L760.5 529L739 515.5L760.5 547L776 580L787.5 629L794 666V691.5L797 714L794 760V790.5L773.5 792L771 795.5V823L768.5 836.5V854L767 884L763.5 909.5L760.5 948L756.5 1016.5L753.5 1066L737 1078.5L731.5 1063.5L733.5 1035L735 1013L737 995.5V980.5L739 960.5V942L737 931.5L739 912.5V895.5L740.5 879.5L741 872.5V861L739 852V823V795.5H721L713 760L704 706.5L700.5 661L697 613.5L693 580L685 540L672.5 580L668 615.5L663.5 654L661 701L654 766.5L649 800.5H582V753.5V719.5L584.5 687V669L588.5 639L593.5 615.5L599.5 589L610 560L619 540L630 523L645.5 507L617.5 523L597.5 539L571.5 567.5L553.5 590.5L530.5 639L522.5 661L514 696L512.5 724V735L522.5 766.5L535 803.5L519 806L512.5 781L516.5 806L512.5 827L516.5 855.5V878V909.5V937V970.5L512.5 1013V1057.5Z"
        fill={selectedColors.strap != "" ? selectedColors.strap : "transparent"}
        opacity={0.3}
        className="hover:fill-blue-500"
        onClick={() => onPointChange("strap")}
      />
      <circle
        cx="608"
        cy="1187"
        r="20"
        fill="white"
        stroke="#2143BB"
        className={`${selectedPoint === 'front' ? 'fill-[#2143BB]': 'fill-white'}`}
        strokeWidth="8"
      />
      <circle
        cx="738"
        cy="628"
        r="20"
        fill="white"
        stroke="#2143BB"
        className={`${selectedPoint === 'strap' ? 'fill-[#2143BB]': 'fill-white'}`}
        strokeWidth="8"
      />
      <circle
        cx="1034"
        cy="1094"
        r="20"
        fill="white"
        className={`${selectedPoint === 'right' ? 'fill-[#2143BB]': 'fill-white'}`}
        stroke="#2143BB"
        strokeWidth="8"
      />
      <defs>
        <pattern
          id="pattern0_735_14000"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_735_14000"
            transform="scale(0.000720981 0.000488281)"
          />
        </pattern>
        <image
          id="image0_735_14000"
          width="1387"
          height="2048"
          href="/bag.jpg"
        />
      </defs>
    </svg>
  );
};

export default BagSVG;
