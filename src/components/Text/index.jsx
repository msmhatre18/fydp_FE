import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-[36px] md:text-[38px] text-[40px]",
  h2: "font-normal sm:text-[32px] md:text-[34px] text-[36px]",
  h3: "font-normal sm:text-[28px] md:text-[30px] text-[32px]",
  h4: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "text-[20px]",
  h6: "font-normal text-[16px]",
  body1: "font-normal text-[13px]",
  body2: "font-normal text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
