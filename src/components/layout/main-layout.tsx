          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">E</span>
            </div>
            <span className="text-lg font-semibold">EasyFlow</span>
          </div>
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground",
                pathname === "/" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/leads"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground",
                pathname === "/leads" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <Users className="h-4 w-4" />
              Leads
            </Link>
            <Link
              href="/tasks"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground",
                pathname === "/tasks" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <CheckSquare className="h-4 w-4" />
              Tasks
            </Link>
            <Link
              href="/calendar"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground",
                pathname === "/calendar" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <Calendar className="h-4 w-4" />
              Calendar
            </Link>
            <Link
              href="/settings"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground",
                pathname === "/settings" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav> 