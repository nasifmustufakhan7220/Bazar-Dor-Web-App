"use client";
import {Button, Spinner} from "@heroui/react";

const NavbarLoading = ({isPending} :{isPending: boolean}) => {
  return (
    <Button className={`bg-green-500`} isPending>
        <>
          {isPending ? <Spinner color="current" size="sm" /> : null}
          Loading...
        </>
    </Button>
  );
}

export default NavbarLoading;