'use client'

import { createContext, useContext } from "react";
import useCandidateTestContext from "./useCandidateTestContext";
import { GridColDef } from "@mui/x-data-grid";
import { CandidateTest } from "@/models/test.model";

interface CandidateTestContextProps {
  columns: GridColDef[],
  isFetchingCandidateTestsData: boolean,
  rows: CandidateTest[],
  t: (...args: any[]) => string
  handleRowClick: (params: any) => void
}

const CandidateTestContext = createContext<CandidateTestContextProps>({} as CandidateTestContextProps);

export const CandidateTestProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const states = useCandidateTestContext()
  return (
    <CandidateTestContext.Provider value={states}>{children}</CandidateTestContext.Provider>
  )
}

export const useCandidateTest = () => useContext(CandidateTestContext);