// Importiere die notwendigen Abhängigkeiten und Komponenten
import React from "react";
import useUserContext from "../data/useContext";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Definiere die 'AllData' Komponente
const AllData = () => {
  // Greife auf den Benutzerkontext zu, um den eingeloggten Benutzer zu erhalten
  const { loggedInUser } = useUserContext();

  // Überprüfe, ob ein Benutzer eingeloggt ist
  if (!loggedInUser) {
    // Wenn kein Benutzer eingeloggt ist, zeige eine Nachricht oder leite ihn zur Login-Seite weiter
    return (
      <div>
        <h3>All Data</h3>
        <p>Please login to your account</p>
        {/* Füge hier einen Link zur Login-Seite hinzu */}
      </div>
    );
  }

  // Wenn ein Benutzer eingeloggt ist, zeige seine Daten
  return (
    <>
      {/* Überschrift */}
      <h1>User</h1>
      <br />
      {/* Tabelle zur Anzeige der Benutzerdaten */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Kontostand</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{loggedInUser.name}</TableCell>
              <TableCell align="right">{loggedInUser.email}</TableCell>
              <TableCell align="right">{loggedInUser.password}</TableCell>
              <TableCell align="right">{loggedInUser.balance}€</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

// Exportiere die 'AllData' Komponente als Standardexport
export default AllData;
