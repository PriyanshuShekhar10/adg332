import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        HR Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <IconButton color="primary" aria-label="users">
                <PeopleIcon fontSize="large" />
              </IconButton>
              <Typography variant="h6">Candidates</Typography>
              <Typography variant="h4">232</Typography>
              <Typography color="textSecondary">+20%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <IconButton color="secondary" aria-label="orders">
                <AssignmentTurnedInIcon fontSize="large" />
              </IconButton>
              <Typography variant="h6">Interviews</Typography>
              <Typography variant="h4">34</Typography>
              <Typography color="textSecondary">+15%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <IconButton color="success" aria-label="products">
                <AssessmentIcon fontSize="large" />
              </IconButton>
              <Typography variant="h6">Resume Scores</Typography>
              <Typography variant="h4">107</Typography>
              <Typography color="textSecondary">+12%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <IconButton color="info" aria-label="balance">
                <MonetizationOnIcon fontSize="large" />
              </IconButton>
              <Typography variant="h6">Balance</Typography>
              <Typography variant="h4">$444</Typography>
              <Typography color="textSecondary">+20%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Resume Scores Distribution</Typography>
              <PieChart />
              <Typography color="textSecondary">
                Total scores assessed today.
              </Typography>
              <Typography variant="h5" sx={{ mt: 2 }}>
                +324
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Resume Scores (Last 1 year)</Typography>
              <LineChart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
